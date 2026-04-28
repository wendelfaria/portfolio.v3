import { ExternalLink } from 'lucide-react'
import Badge from '@/components/ui/Badge/Badge'
import styles from './ProjectCard.module.css'

export default function ProjectCard({ title, niche, description, image, liveUrl, tags = [] }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        {image ? (
          <img
            src={image}
            alt={`Screenshot do projeto ${title}`}
            className={styles.image}
            loading="lazy"
            width={600}
            height={400}
          />
        ) : (
          <div className={styles.imagePlaceholder} aria-hidden="true">
            <span>{title}</span>
          </div>
        )}
      </div>

      <div className={styles.body}>
        <div className={styles.meta}>
          <Badge variant="accent">{niche}</Badge>
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>

        {tags.length > 0 && (
          <ul className={styles.tags} aria-label="Tecnologias usadas">
            {tags.map((tag) => (
              <li key={tag}>
                <Badge>{tag}</Badge>
              </li>
            ))}
          </ul>
        )}

        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            aria-label={`Visitar o site ${title} (abre em nova aba)`}
          >
            Ver site ao vivo
            <ExternalLink size={14} aria-hidden="true" />
          </a>
        )}
      </div>
    </article>
  )
}
