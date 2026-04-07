import { useState } from 'react';
import { ScrollReveal } from '../../hooks/useAnimations';
import { aiService } from '../../services/aiService';
import type { AgentStep } from '../../services/aiService';
import './StudioIA.css';

export default function StudioIA() {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [steps, setSteps] = useState<AgentStep[]>([]);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim() || isGenerating) return;

    setIsGenerating(true);
    setVideoUrl(null);
    setSteps([]);

    try {
      const result = await aiService.generateVideo(prompt, (updatedSteps) => {
        setSteps([...updatedSteps]);
      });
      setVideoUrl(result);
    } catch (error) {
      console.error('Generation failed:', error);
      alert('Une erreur est survenue lors de la génération.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <section className="studio" id="studio">
      <div className="container">
        <ScrollReveal>
          <div className="studio__header">
            <div className="studio__label">Innovation IA</div>
            <h2 className="studio__title">Studio Agentique</h2>
            <p className="studio__desc">
              Générez des vidéos et mini-séries instantanément. Notre orchestre d'agents IA s'occupe de tout :
              du script à l'image, du son au montage final.
            </p>
          </div>
        </ScrollReveal>

        <div className="studio__grid">
          <div className="studio__input-card">
            <form onSubmit={handleGenerate}>
              <div className="studio__form-group">
                <label htmlFor="prompt">Votre vision</label>
                <textarea
                  id="prompt"
                  placeholder="Ex: Une mini-série sur l'avenir de la logistique à Dakar en 2050..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  disabled={isGenerating}
                />
              </div>
              <button
                type="submit"
                className={`studio__submit ${isGenerating ? 'studio__submit--loading' : ''}`}
                disabled={isGenerating || !prompt.trim()}
              >
                {isGenerating ? 'Génération en cours...' : 'Lancer les Agents'}
              </button>
            </form>
          </div>

          <div className="studio__output-card">
            {steps.length > 0 && (
              <div className="studio__agents">
                <h3>Processus Agentique</h3>
                <div className="studio__steps">
                  {steps.map((step, i) => (
                    <div key={i} className={`studio__step studio__step--${step.status}`}>
                      <div className="studio__step-icon">
                        {step.status === 'completed' && '✓'}
                        {step.status === 'processing' && <div className="studio__loader" />}
                        {step.status === 'pending' && '○'}
                      </div>
                      <div className="studio__step-info">
                        <h4>{step.agent}</h4>
                        <p>{step.message}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {videoUrl && (
              <div className="studio__result">
                <h3>Produit Final</h3>
                <div className="studio__video-container">
                  <video src={videoUrl} controls autoPlay />
                </div>
                <a href={videoUrl} download className="studio__download">
                  Télécharger la vidéo
                </a>
              </div>
            )}

            {!isGenerating && !videoUrl && steps.length === 0 && (
              <div className="studio__placeholder">
                <div className="studio__placeholder-icon">🎬</div>
                <p>Entrez un prompt pour commencer la magie.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
